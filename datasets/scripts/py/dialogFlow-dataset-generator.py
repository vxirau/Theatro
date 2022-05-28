import csv, json
import time

mDatos = []
gDatos = []
genres = []

mDone = False
gDone = False
start = time.time()


with open('datasets/csv/movies.csv') as csvFile:
    csvReader = csv.DictReader(csvFile)
    for rows in csvReader:
        if not mDone:
            mData = {}
            title = rows['title'].split(" (")[0]
            mData['value'] = title
            mData['synonyms'] = [title, title.lower(), title.replace(' ', '-')]
            mDatos.append(mData)
            if len(mDatos) == 30000:
                mDone = True

        if not gDone:
            gData = {}
            g = rows['genres'].split("|")
            for j in g:
                if j != "(no genres listed)":
                    if j not in genres:
                        genres.append(j)
                        gData['value'] = j
                        gData['synonyms'] = [j.lower(), j.replace('-', ' ')]
                        gDatos.append(gData)
                        gData = {}
            if len(gDatos) == 30000:
                gDone = True

        if gDone and mDone:
            break

with open('datasets/csv/genome-tags.csv') as csvFile:
    csvReader = csv.DictReader(csvFile)
    for rows in csvReader:
        gData = {}
        j = rows['tag']
        if j not in genres:
            genres.append(j)
            gData['value'] = j
            gData['synonyms'] = [j.lower(), j.replace('-', ' ')]
            gDatos.append(gData)
            gData = {}

with open('datasets/json/movies.json', 'w') as jsonFile:
    jsonFile.write(json.dumps(mDatos, indent=4))

with open('datasets/json/resource-value.json', 'w') as jsonFile:
    jsonFile.write(json.dumps(gDatos, indent=4))

end = time.time()
print("\nHa trigat " + format(((end - start) * 1000), ".4f") + "ms en tradiur tots els datasets")