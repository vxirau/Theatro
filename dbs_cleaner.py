
import csv

input = "movie_keyword"

with open("datasets/csv/dirty/"+input+".csv", "r", encoding="ISO-8859-1") as source:
    reader = csv.reader(source)
    line=0
    print("Open "+input+".csv")
    with open("datasets/csv/clean/"+input+"-clean.csv", "w") as result:
        writer = csv.writer(result)
        print("Writting "+input+"-clean.csv")
        for r in reader:
            line += 1
            writer.writerow((r[0], r[2], r[3]))


        print("Done :)")

        #info es la penultima