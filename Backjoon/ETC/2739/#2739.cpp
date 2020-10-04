// https://www.acmicpc.net/problem/2739
// 구구단 찍기
// #개발환경 세팅 테스트 용.
#include <iostream>
#include <algorithm>

using namespace std;

int main() {
    int d;

    cin>>d;
    
    for (int i = 1 ; i <= 9 ; i++ )
        cout<<d<<" x "<<i<< " = " <<d*i<<endl;

    return 0;
}