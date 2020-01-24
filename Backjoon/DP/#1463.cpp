// 1로 만들기
#include <iostream>
#include <algorithm>

using namespace std;
const int MAX = 1000001;
int dp[MAX];

int take(int f_n) {
    int result = 0;

    if (f_n == 1)
        return 0;
    if (dp[f_n] != -1)
        return dp[f_n];
    
    result = take(f_n - 1) + 1;
    if (f_n % 3 == 0)
        result = min(take(f_n / 3) + 1 , result);
    else if (f_n % 2 == 0)
        result = min(take(f_n / 2) + 1 , result);

    dp[f_n] = result;

    return result;
}

int main() {
    int n;
    fill(dp, dp + MAX, -1);
    cin>>n;

    cout<<take(n)<<endl;

    return 0;
}