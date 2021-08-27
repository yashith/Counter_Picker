import json

f = open('herolist.json','r')
data = json.load(f)
i=0
# print(data[0]['id'])
for x in data:
        x['id']=i
        i+=1
f.close()
f=open('herolist2.json','w')
json.dump(data,f)
f.close()