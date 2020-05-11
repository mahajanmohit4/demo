#include<iostream>

using namespace std;

int main()
{
    int mat[4][4]={{0,0,0,0},{0,0,0,0},{0,0,0,0},{0,0,0,0}};
    int input;
    char a='A';
    char b='A';
    for(int i=0;i<4;i++)
    {
        b='A';
        for(int j=0;j<4;j++)
        {

            cout<<"arr  "<<a<<" arr  "<<b<<" :";


            cin>>input;
            if(input==1)
            {
                mat[i][j]=1;
            }
            b++;
        }
        a++;
    }


    for(int i=0;i<4;i++)
    {
        for(int j=0;j<4;j++)
        {
            cout<<mat[i][j]<<" ";
        //cout<<i+1<<"---->"<<j+1<<"connected"<<endl;
        }
        cout<<endl;
    }

    a='A';
 for(int i=0;i<4;i++)
    {

        b='A';
        for(int j=0;j<4;j++)
        {

          if(mat[i][j]==1)
          {
              cout<<a<<"---->"<<b<<"connected"<<endl;
          }

            b++;
        }
        cout<<endl;
        a++;
    }
    return 0;
}
