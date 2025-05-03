package myPackage;
public class Factorial 
{
	public static int fact(int n)
	{
		if(n==0)
			return 1;
		else
			return(n*fact(n-1));

	}
	public static void main(String[] args) 
	{

		int Result=1;
		int number=4;
		Result=fact(number);
		System.out.println("Factorial of "+number+" is " +Result );
	}
}
 