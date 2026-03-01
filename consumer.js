const { kafka } = require("./client")

async function init() {
    const consumer = kafka.consumer({ groupId: "user-1" })

    await consumer.connect()
    await consumer.subscribe({ topics: ['Rider-updates'], fromBeginning: true })

    await consumer.run({
        eachMessage: async ({ topic, partition, messages, heartbeat, pause }) => {
            console.log(` ${topic}: PART:${partition}: ${JSON.stringify(messages)}`)
        }
    })

    // await consumer.disconnect()
}

init()

