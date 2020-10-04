// https://www.acmicpc.net/problem/4673
// 셀프넘버
#include <iostream>
#define MAX 10000

using namespace std;

int cal(int t, int ct = 1)
{
    int result = t;

    while(1) {
        if (t == 0)
            break;
        result += t % 10;
        t /= 10;
    }

    return result;
}

int main() {

    bool arr[MAX + 1] = {0,};
    for (int i = 1; i <= MAX ; i ++) {
        arr[cal(i)] = true;
    }
    for (int i = 1 ; i < MAX ; i ++)
        if(!arr[i])
            cout<<i<<endl;
    return 0;
}