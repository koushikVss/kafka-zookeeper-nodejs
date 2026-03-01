const { kafka } = require("./client")

async function init() {
    const consumer = kafka.consumer({ groupId: process.env.GROUP_ID})

    await consumer.connect()
    await consumer.subscribe({ topics: ['Rider-updates'], fromBeginning: true })

    await consumer.run({
        eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
            const {key,value} = {key:message.key?.toString(),value:message.value?.toString()}
            console.log(` ${topic}: PART:${partition}: ${key}: ${value}`)
        }
    })

    // await consumer.disconnect()
}

init()

