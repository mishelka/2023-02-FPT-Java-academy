package arrays;

public class ArrayCopyDemo {
    public static void main(String[] args) {
        int[] copyFrom = initializeArray();
//        char[] copyFrom = { 'd', 'e', 'c', 'a', 'f', 'f', 'e',
//			    'i', 'n', 'a', 't', 'e', 'd' };
        char[] copyTo = new char[7];

        long casZaciatku = System.currentTimeMillis();

        //java arraycopy
        System.arraycopy(copyFrom, 2, copyTo, 0, 7);
        System.out.println(new String(copyTo));

        long casKonca = System.currentTimeMillis();

        long casZaciatku1 = System.currentTimeMillis();

        //java arraycopy
        myArrayCopy(copyFrom, 2, copyTo, 0, 7);
        System.out.println(new String(copyTo));

        long casKonca2 = System.currentTimeMillis();
    }

    private static int[] initializeArray() {
        int[] pole = new int[10000000];
        for (int i = 0; i < 10000000; i++) {
            pole[i] = i;
        }
        return pole;
    }

    private static void myArrayCopy(Object source, int srcIndex,
                                    Object dest, int destIndex, int length) {
        if (dest == null || source == null) {
            System.out.println("Destination or source array is null.");
            return;
        }

        if(!source.getClass().isArray() || !dest.getClass().isArray()) {
            System.out.println("Destination or source is not an array.");
            return;
        }

        int[] src = (int[]) source;
        int[] dst = (int[]) dest;

        if(src.length < length + srcIndex) {
            System.out.println("Source array is not large enough.");
            return;
        }

        if(dst.length < length + destIndex) {
            System.out.println("Destination array is not large enough");
            return;
        }

        for(int i = 0; i < length; i++) {
            dst[destIndex + i] = src[srcIndex + i];
        }

        System.out.println("Copying was successful");
    }
}