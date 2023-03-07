package io;

import java.io.File;
import java.io.IOException;
import java.nio.file.*;
import java.nio.file.attribute.BasicFileAttributes;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class ListDir {
    public static void main(String[] args) throws IOException {
        File dir = new File(".");

        List<File> allFiles = new ArrayList<>();

        //originalMethod
        // originalMethod(dir);

        //vypise celý obsah adresára - vsetky zlozky aj subory
        //listDir(dir.getPath());

        // vypise len subory (rekurzivne)
        //listFilesWithRekurze(dir,allFiles);

        // vypise vsetky subory aj adresare, ktore zacinaju na firstLetter - with Visitor
//        listFilesBeginningWith(dir, 'H');

        // vypise vsetky subory s danou priponou
//        listFilesWithExtension(dir, "txt");

        List<File> directories = filterFiles(
                ".", filePath -> new File(filePath).isDirectory()
        );
        System.out.println(directories);

        List<File> filesBeginningWithH = filterFiles(".", filePath ->
        {
            File f = new File(filePath);
            if (f.isDirectory()) return false;
            return f.getName().toLowerCase().startsWith("h");
        });
        System.out.println(filesBeginningWithH);
    }

    public static void originalMethod(File dir) {
        if (dir.isDirectory()) {
            System.out.println("Listing of: " + dir.getAbsolutePath());

            //List directory
            for (String fileName : Objects.requireNonNull(dir.list())) {
                System.out.println("  " + fileName);
            }
        } else {
            System.err.printf("File %s is not directory", dir);
        }
    }

    public static void listDir(String path) throws IOException {
        Path pathToFile = Path.of(path);
        List<Path> list = Files.walk(pathToFile, Integer.MAX_VALUE).toList();
        for (Path p : list) {
            System.out.println(p.getFileName());
        }
    }

    public static void listFilesWithRekurze(File root, List<File> allFiles) {

        if (root.isDirectory()) {
            File[] directory = root.listFiles();
            if (directory != null) {
                for (File file : directory) {
                    if (file.isDirectory()) {
                        listFilesWithRekurze(file, allFiles);
                    } else {
                        allFiles.add(file);
                    }
                }
            }
        }

        for (File file : allFiles) {
            System.out.println(file);
        }

    }

    public static void listFilesWithExtension(File dir, String ext) throws IOException {
        Path pathToFile = Path.of(dir.toURI());
        List<Path> list = Files.walk(pathToFile, Integer.MAX_VALUE)
                .filter(f -> f.getFileName().toString().endsWith((ext)))
                .toList();
        for (Path p : list) {
            System.out.println(p.getFileName());
        }
    }

    public static void listFilesBeginningWith(File dir, char firstLetter) throws IOException {
        PrintFiles printFiles = new PrintFiles(firstLetter);
        Path pathToFile = Path.of(dir.toURI());
        Files.walkFileTree(pathToFile, printFiles);
    }

    static class PrintFiles extends SimpleFileVisitor<Path> {
        char firstLetter;

        public PrintFiles(char firstLetter) {
            this.firstLetter = firstLetter;
        }

        @Override
        public FileVisitResult visitFile(Path file, BasicFileAttributes attr) {
            if (attr.isRegularFile() && file.getFileName().toString().startsWith(String.valueOf(firstLetter))) {
                System.out.println("File: " + file.getFileName());
            }
            return FileVisitResult.CONTINUE;
        }
    }

    static List<File> filterFiles(String path, FileFilter filter) {
        List<File> acceptedFiles = new ArrayList<>();

        filterFiles(new File(path), filter, acceptedFiles);

        return acceptedFiles;
    }

    static void filterFiles(File file, FileFilter filter, List<File> acceptedFiles) {
        if(filter.accept(file.getPath())) {
            acceptedFiles.add(file);
        }

        if(file.isDirectory()) {
            for (File subFile : file.listFiles()) {
                filterFiles(subFile, filter, acceptedFiles);
            }
        }
    }

    @FunctionalInterface
    private interface FileFilter {
        boolean accept(String filePath);
    }
}