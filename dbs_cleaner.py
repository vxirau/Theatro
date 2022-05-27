
import csv

input = "aka_name"

with open("datasets/dbs/"+input+".csv", "r", encoding="ISO-8859-1") as source:
    reader = csv.reader(source)
    line=0
    print("Open "+input+".csv")
    with open("datasets/dbs/"+input+"-clean.csv", "w") as result:
        writer = csv.writer(result)
        print("Writting "+input+"-clean.csv")
        for r in reader:
            line += 1
            if r[1] == "md5sum)s":
                writer.writerow((r[0], r[2], r[3], r[4], r[5], r[6], r[7], r[8]))
            else:
                writer.writerow((r[0], r[1], r[2], r[3], r[4], r[5], r[6], r[7]))


        print("Done :)")

        #info es la penultima