import conf from "../conf/conf";
import {Client , ID , Databases , Storage , Query} from "appwrite";

export class Service{
    client = new Client();
   
    databases;
    bucket;         // storage 

    constructor(){ 
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(client);
        this.bucket = new Storage(client);
    }

    async createPost ({tittle, slug , content , featuredImage , status , userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    tittle,
                    content,
                    featuredImage,
                    status, 
                    userId,
                }

            )
        } catch (error) {
            console.log("Appwrite Serive :: createPost :: error", error);
            
        }
    }
    async updatePost(slug , {tittle, content , featuredImage, status}){
        try {

            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    tittle,
                    content,
                    featuredImage,
                    status,
                }
            )
            
        } catch (error) {
            console.log("Appwrite Serive :: updatePost :: error", error); 
        }
    }
    async deletePost(slug){
        try {

             await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )

            return true;
            
        } catch (error) {
            console.log("Appwrite Serive :: deletePost :: error", error); 
            return false;
        }
    }
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite Serive :: getPost :: error", error)
        }
    }
    async getPosts(queries = [Query.equal("status" , "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
            )
        } catch (error) {
            console.log("Appwrite Serive :: getPosts :: error", error)
            return false;
        }
    }
    
    // file upload services

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
            
        } catch (error) {
            console.log("Appwrite Serive :: uploadFile :: error", error)
            return false;
        }
    }
    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true;
            
        } catch (error) {
            console.log("Appwrite Serive :: deleteFile :: error", error)
            return false;
        }
    }

    getFilePreview (fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}

const service = new Service();


export default service; 