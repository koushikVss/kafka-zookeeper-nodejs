//Admin  Creates topics and all..
const { kafka } = require("./client")

async function init() {
    const admin = kafka.admin()
    console.log("Admin connecting..")
    admin.connect()
    console.log("admin connected")
    console.log("Creating  topics")

    try {
        admin.createTopics({
            topics: [{
                topic: "Rider-updates",
                numPartitions: 2
            }]
        })
    }
    catch (e) {
        console.log("TOpic already created ", e.message)
    }
    console.log("Topics created - Rider updates")
    await admin.disconnect();
}

init()



