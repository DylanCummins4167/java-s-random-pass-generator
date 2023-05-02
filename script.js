import java.util.Scanner;

class Main {
  public static void main (String[] args) {
    Scanner in = new Scanner(System.in);
    
    System.out.print("How many random passwords do you want generated?");
    int total = in.nextInt();
    System.out.print("How many characters long do you want your password to be?");
    int length = in.nextInt();
    
  }


public static char randomCharacter() {
  
  int rand = (int) (Math.random()*62);
