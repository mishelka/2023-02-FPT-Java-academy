//Test on inputs 234 and 2132
public class NumberToText {
	//TODO: Fix main method
    public static void  main(String[] args){
        int number = Integer.parseInt(args[0]);

        if(number >= 1000) {
            writeNumber(number % 1000);
            writeNumber(1000);
            number %= 1000;
        }

        if(number >= 100) {
            writeNumber(number / 100);
            writeNumber(100);
            number %= 100;
        }

        if(number <= 20) {
           writeNumber(number);
        } else if(number < 100) {
            writeNumber(number / 10 * 10);
            if(number % 10 == 0){
                writeNumber(number % 10);
            }
        }
    }

    private static void writeNumber(int number){
        switch(number){
            case 1: System.out.print("one"); break;
            case 2: System.out.print("two"); break;
            case 3: System.out.print("three"); break;
            case 4: System.out.print("four"); break;
            case 5: System.out.print("five"); break;
            case 6: System.out.print("six"); break;
            case 7: System.out.print("seven"); break;
            case 8: System.out.print("eight"); break;
            case 9: System.out.print("nine"); break;
            case 10: System.out.print("ten"); break;
            case 11: System.out.print("eleven"); break;
            case 12: System.out.print("twelve"); break;
            case 13: System.out.print("thirteen"); break;
            case 14: System.out.print("fourteen"); break;
            case 15: System.out.print("fifteen"); break;
            case 16: System.out.print("sixteen"); break;
            case 17: System.out.print("seventeen"); break;
            case 18: System.out.print("eighteen"); break;
            case 19: System.out.print("nineteen"); break;
            case 20: System.out.print("twenty"); break;
            case 30: System.out.print("thirty"); break;
            case 40: System.out.print("forty"); break;
            case 50: System.out.print("fifty"); break;
            case 60: System.out.print("sixty"); break;
            case 70: System.out.print("seventy"); break;
            case 80: System.out.print("eighty"); break;
            case 90: System.out.print("ninety"); break;
            case 100: System.out.print("hundred "); break;
            case 1000: System.out.print("thousand "); break;
        }
    }
}