package main;

import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {
        System.out.println("Hello, World!");
        Scanner input = new Scanner(System.in);  // Create a Scanner object
        Game game=new Game(7);
        boolean winnerFlag=false;
        while(true){
            System.out.println("player One Chose column: ");
            int user1=input.nextInt();
            game.addCoin(1, user1);
            game.printBoard();

            if (game.winner()>0){break;}

            System.out.println("player Two Chose column: ");
            int user2=input.nextInt();
            game.addCoin(2, user2);
            game.printBoard();
            if (game.winner()>0){winnerFlag=true;}
        }

    }
}
