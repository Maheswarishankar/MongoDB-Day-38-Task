

//create a database.......

db.createCollection("zenclass")

//InsertData.........

db.zenclass.insertMany([
    {
        "user": "Maheshwari",
        "codekata": 275,
        "attendance": "Present",
        "topics": "NodeJS",
        "topic_date": new Date("<2022-10-05>"),
        "task_date": new Date("<2022-10-10>"),
        "tasks": "WebScraping",
        "company_drives": "TCS",
        "company_drives_date": new Date("<2022-10-25>"),
        "placement": "Appeared",
        "mentors": "Shan"
    },
    {
        "user": "Nawin",
        "codekata": 200,
        "attendance": "Present",
        "topics": "React",
        "topic_date": new Date("<2022-10-015>"),
        "task_date": new Date("<2022-10-11>"),
        "tasks": "Pizza Delivery",
        "company_drives": "HCL",
        "company_drives_date": new Date("<2022-10-26>"),
        "placement": "Appeared",
        "mentors": "Sanjay"
    },
    {
        "user": "Siddharth",
        "codekata": 230,
        "attendance": "Present",
        "topics": "Javascript",
        "topic_date": new Date("<2022-10-06>"),
        "task_date": new Date("<2022-10-12>"),
        "tasks": "UrlshortHand",
        "company_drives": "TCS",
        "company_drives_date": new Date("<2022-10-27>"),
        "placement": "Appeared",
        "mentors": "Jhon"
    },
    {
        "user": "Vidhya",
        "codekata": 290,
        "attendance": "Present",
        "topics": "React",
        "topic_date": new Date("<2022-10-07>"),
        "task_date": new Date("<2022-10-13>"),
        "tasks": "Ecommerce Websites",
        "company_drives": "CTC",
        "company_drives_date": new Date("<2022-10-24>"),
        "placement": "Appeared",
        "mentors": "Magesh"
    },
    {
        "user": "Ranjani",
        "codekata": 70,
        "attendance": "Absent",
        "topics": "NodeJS",
        "topic_date": new Date("<2022-10-03>"),
        "task_date": new Date("<2022-10-08>"),
        "tasks": "WebScraping",
        "company_drives": "Teach Makindra",
        "company_drives_date": new Date("<2022-10-31>"),
        "placement": "Appeared",
        "mentors": "Shan"
    },
    {
        "user": "Nithisha",
        "codekata": 40,
        "attendance": "Absent",
        "topics": "Javascript",
        "topic_date": new Date("<2022-10-04>"),
        "task_date": new Date("<2022-10-07>"),
        "tasks": "theMealDB",
        "company_drives": "ZOHO",
        "company_drives_date": new Date("<2022-10-21>"),
        "placement": "Appeared",
        "mentors": "Mithun"
    },
    {
        "user": "sajith",
        "codekata": 220,
        "attendance": "Present",
        "topics": "MongoDB",
        "topic_date": new Date("<2022-10-04>"),
        "task_date": new Date("<2022-10-07>"),
        "tasks": "G-pay",
        "company_drives": "wipro",
        "company_drives_date": new Date("<2022-10-20>"),
        "placement": "Appeared",
        "mentors": "Mithiran"
    },
    {
        "user": "Akash",
        "codekata": 90,
        "attendance": "Absent",
        "topics": "HTML",
        "topic_date": new Date("<2022-10-06>"),
        "task_date": new Date("<2022-10-09>"),
        "tasks": "Phone-pay",
        "company_drives": "infosys",
        "company_drives_date": new Date("<2022-10-31>"),
        "placement": "Appeared",
        "mentors": "Sidhu"
    },
    {
        "user": "Geetha",
        "codekata": 210,
        "attendance": "Present",
        "topics": "Javascript",
        "topic_date": new Date("<2022-10-20>"),
        "task_date": new Date("<2022-10-25>"),
        "tasks": "Covid19",
        "company_drives": "cognizant",
        "company_drives_date": new Date("<2022-10-31>"),
        "placement": "Appeared",
        "mentors": "Rupan"
    },
    {
        "user": "Anvi",
        "codekata": 200,
        "attendance": "Present",
        "topics": "MYSQL",
        "topic_date": new Date("<2022-10-22>"),
        "task_date": new Date("<2022-10-27>"),
        "tasks": "WebScraping",
        "company_drives": "ZOHO",
        "company_drives_date": new Date("<2022-10-28>"),
        "placement": "Appeared",
        "mentors": "Nagarajan"
    },  

])
//3).Find all the topics and tasks which are thought in the month of October
db.zenclass.find({$or: [{topic_date: {$gte : new Date("<2020-10-01>"), $lte: new Date("<2020-10-31>")}},{task_date: {$gte : new Date("<2020-10-01>"), $lte: new Date("<2020-10-31>")}}]},{topics: 1, tasks: 1}).toArray();

//4). Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
db.zenclass.find({company_drives_date: {$gte : new Date("<2020-10-15>"), $lte: new Date("<2020-10-31>")}},{company_drives: 1}).toArray();

//5). Find all the company drives and students who are appeared for the placement.
db.zenclass.find({placement: "Appeared"},{ _id: 0,user: 1, company_drives: 1}).toArray();

//6). Find the number of problems solved by the user in codekata
db.zenclass.find({},{_id: 0,user: 1, codekata: 1}).toArray();

//7).Find all the mentors with who has the mentee's count more than 15
db.zenclass.aggregate([
    {$group: {_id: "$mentors", count: {$sum: 1}}},
    {$match: {_id: {$ne: null}, count: {$gt: 15}}}
]);
db.zenclass.find({mentors: "Mithran"},{user: 1, mentors: 1});

//8). Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
db.zenclass.find({$or: [{attendance: "Absent"}, {task_date: {$not: {$gte: new Date("<2020-10-15>"), $lte: new Date("<2020-10-31>")}}}]});