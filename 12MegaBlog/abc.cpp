#include<bits/stdc++.h>
using namespace std;


 void solve(vector<int> &ans, vector<int>&temp, int n , int i){
    
    if(i<0) return; // basecase

    solve(ans,temp , n, i-1); // recursive call

    temp.push_back(ans[i]); // work
    

    
    
}

vector<int> reverseArray(vector<int> &arr){
    vector<int> temp;
    int n = arr.size();
    solve(arr,temp , n,n-1);
    return temp;

}

int main()
{
    vector<int> arr =  {1,2,3,4,5,6,7};
    vector<int> ans = reverseArray(arr);
    for(int i = 0 ; i<ans.size() ; i++){
        cout<<ans[i]<<" ";
    }



 return 0;
}