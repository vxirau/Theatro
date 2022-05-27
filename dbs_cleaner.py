
import csv

input = "person_info"

with open("datasets/dbs-prova/"+input+".csv", "r", encoding="ISO-8859-1") as source:
    reader = csv.reader(source)
    line=0
    print("Open "+input+".csv")
    with open("datasets/dbs-prova/"+input+"-clean.csv", "w") as result:
        writer = csv.writer(result)
        print("Writting "+input+"-clean.csv")
        for r in reader:
            line += 1
            if len(r) < 6:
                if len(r) == 5:
                    writer.writerow((r[0], r[1], r[2], r[3], r[4]))
                else:
                    print(r)
            else:
                if len(r[4]) >= 255:
                    r[4] = r[4:249]
                    r[4] += " (...)"
                if r[1] == "note)s":
                    writer.writerow((r[0], r[2], r[3], r[4], r[5]))
                else:
                    writer.writerow((r[0], r[1], r[2], r[3], r[4]))


        print("Done :)")

        #info es la penultima