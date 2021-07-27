package main;
import java.util.Arrays;

public class Game {

    int[][] board;

    public Game(int boardSize) {
        board = new int[boardSize][boardSize];
    }

    private int WinnerByRow() {
        int n = this.board.length;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n - 3; j++) {
                if (board[i][j]!=0 && board[i][j] == board[i][j + 1] && board[i][j] == board[i][j + 2]
                        && board[i][j] == board[i][j + 3]) {
                    int winner = board[i][j];
                    System.out.println("Winner is "+winner);
                    return winner;
                }
            }
        }
        return 0;
    }

    private int WinnerByCol() {
        int n = this.board.length;
        for (int j = 0; j < n; j++) {
            for (int i = 0; i < n - 3; i++) {
                if (board[i][j]!=0 && board[i][j] == board[i + 1][j] && board[i][j] == board[i + 2][j]
                        && board[i][j] == board[i + 3][j]) {
                    int winner = board[i][j];
                    System.out.println("Winner is "+winner);
                    return winner;
                }
            }
        }
        return 0;
    }

    private int WinnerByDig() {
        int n = this.board.length;
        for (int i = 0; i < n-3; i++) {
            for (int j = 0; j < n - 3; j++) {
                if (board[i][j]!=0 && board[i][j] == board[i+1][j + 1] && board[i][j] == board[i+2][j + 2]
                        && board[i][j] == board[i+3][j + 3]) {
                    int winner = board[i][j];
                    System.out.println("Winner is "+winner);
                    return winner;
                }
            }
        }
        return 0;
    }

    public int winner(){
        
        int row=WinnerByRow();
        int col=WinnerByCol();
        int dig=WinnerByDig();

        if(row!=0){return row;}
        if(col!=0){return col;}
        return dig;  
    }

    

    public void addCoin(int playerID, int Column) {
        int n = this.board.length;
        for (int i = n - 1; i >= 0; i--) {
            if (board[i][Column] == 0) {
                board[i][Column] = playerID;
                return;
            }
        }
        System.out.println("cant add coin");
    }

    public void printBoard() {
        for (int[] x : this.board)
        {
           for (int y : x)
           {
                System.out.print(y + " ");
           }
           System.out.println();
        }
    }
}