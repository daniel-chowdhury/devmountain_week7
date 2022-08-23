const tripTime = (arr) => {
    let result = {
        avgSpeedLimits: [], 
        segmentTimes: [], 
        totalTime: null
    }

    for (let i = 0; i < arr.length; i++) {
        let segment_time = arr[i].speedLimits.map(value => {
            let {distance, speedLimit} = value
            return (distance/speedLimit)*60
        }).reduce((prev, curr) => prev + curr)
        result.segmentTimes.push(segment_time)
        let segment_distance = arr[i].speedLimits.map(value => value.distance)
        .reduce((prev, curr) => prev + curr)
        result.avgSpeedLimits.push(segment_distance/(segment_time/60))
    }
    result.totalTime = (result.segmentTimes.reduce((prev, curr) => prev + curr)) + " minutes"

    result.segmentTimes = result.segmentTimes.map(value => value + " minutes")

    result.avgSpeedLimits = result.avgSpeedLimits.map(value => value + " miles/hour")


    return result
}



const stops = [
    {
        name: `Gus's Gas`, 
        speedLimits: [
            {
                distance: 5,
                speedLimit: 45
            },
            {
                distance: 97,
                speedLimit: 65
            },
            {
                distance: 72,
                speedLimit: 70
            },
            {
                distance: 25,
                speedLimit: 50
            }
        ], 
        traffic: 12
    }, 
    {
        name: `Halle's House of Pancakes`, 
        speedLimits: [
            {
                distance: 36,
                speedLimit: 50
            },
            {
                distance: 141,
                speedLimit: 75
            }
        ], 
        traffic: 0
    }, 
    {
        name: `Jake's Great Shakes`, 
        speedLimits: [
            {
                distance: 100,
                speedLimit: 75
            },
            {
                distance: 84,
                speedLimit: 70
            },
            {
                distance: 20,
                speedLimit: 75
            }
        ], 
        traffic: 30
    }, 
    {
        name: `Luna's Lunch Counter`, 
        speedLimits: [
            {
                distance: 3,
                speedLimit: 35
            },
            {
                distance: 5,
                speedLimit: 45
            },
            {
                distance: 20,
                speedLimit: 65
            },
            {
                distance: 85,
                speedLimit: 75
            },
            {
                distance: 3,
                speedLimit: 65
            },
            {
                distance: 5,
                speedLimit: 55
            }
        ], 
        traffic: 7
    }, 

]


console.log(tripTime(stops))
