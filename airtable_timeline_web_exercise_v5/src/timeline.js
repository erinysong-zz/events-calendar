import React, { useEffect, useState, Component } from 'react';
import timelineItemsJSON from './timelineItems';
import './index.css';

function Timeline() {
    const [timelineItems, setTimelineItems] = React.useState(timelineItemsJSON) // artifact from attempt to add create/edit/delete event function before running out of time
    const [timeline, setTimeline] = React.useState([]) // list of dates that appear on leftmost column
    const [eventGrid, setEventGrid] = React.useState([]) // list of events that are displayed on event grid
    const [numDaysDisplayed, setNumDaysDisplayed] = React.useState(5) // number of days displayed at a time on screen, can be within inclusive range 0 to 9.
    
    const colorPalette = [`#CFDFFF`, `#C2F5E9`, `#FFE9B6`, `#EDE2FE`, `#FEE2D5`] // color palette derived from airtable [blue, green, orange, purple, peach ]
    const colorMappings = {} // enables color consistency for events with same name

    React.useEffect(() => {
        // extracts earliest and final event in our timeline 
        const firstEvent = timelineItems.slice().sort((a, b) => stringToDate(a.start) - stringToDate(b.start))[0]
        const lastEvent = timelineItems.slice().sort((a, b) => stringToDate(a.end) - stringToDate(b.end))[timelineItems.length - 1]
        
        // creates a list of dates from earliest date to latest date
        timelineItems.sort((a, b) => stringToDate(a.start) - stringToDate(b.start))

        // initializes timeline from earliest start date to latest end date
        const start = stringToDate(firstEvent.start)
        const end = stringToDate(lastEvent.end)
        const numDays = ((end.getTime() - start.getTime()) / (1000 * 3600 * 24)) + 1
        const dates = []
        const blockHeight = 100 / numDaysDisplayed
        console.log(blockHeight)
        
        // adds all dates in between earliest start date and latest end date to timeline bar
        for (let i = 0; i < numDays; i++) {
            const newDate = new Date(start)
            const gridRow = (i+1) + '/' + (i+2)
            newDate.setDate(start.getDate() + i)
            
            const dateBlock = (
                <div key={newDate}
                className="timeline-date-block"
                style = {{
                    gridRow: gridRow,
                    height: `${blockHeight} vh`
                }}>
                    <p className="timeline-date-text">{newDate.getMonth() + 1}/{newDate.getDate()}</p>
                </div>
            )
            dates.push(dateBlock)
        }
        setTimeline(dates)

        // resets then reinitializes event grid placing events in different times
        const grid = []
        timelineItems.forEach(event => {
            var blockColor = colorPalette[0]
            if (event.name in colorMappings) {
                blockColor = colorMappings[event.name]
            } else {
                const numEvents = Object.keys(colorMappings).length
                blockColor = colorPalette[(numEvents ? numEvents : 0) % colorPalette.length]
                colorMappings[event.name] = blockColor
            }

            const eventContainer = (
                <div key={event.id}
                className="event-container"
                style={{
                    height: `calc(${calcNumDays(event) * blockHeight}vh)`,
                    top: `0`,
                    gridRow: calcEventCol(event),
                }}>
                    <div 
                    className="event-block"
                    style={{
                        height: `calc(${calcNumDays(event) * blockHeight}vh - 5px)`,
                        backgroundColor: blockColor,
                    }}>
                        <div className="event-text">
                            <h1 className="event-title">{event.name}</h1>
                            <p>{displayEventDate(event)}</p>
                        </div>
                    </div>
                </div>
            )
            grid.push(eventContainer)
        })
        setEventGrid(grid)
    }, [numDaysDisplayed])

    // converts json string from timelineItems.js to Date type format
    const stringToDate = (datestring) => {
        const dateObjects = datestring.split('-')
        var date = new Date(dateObjects[0], dateObjects[1] - 1, dateObjects[2])
        return date
    }

    // formats event date displayed on event block. If event date is only 1 day long, only display the date that event occurs.
    const displayEventDate = (event) => {
        if (event.start === event.end) {
            return event.start.split('-')[1] + '/' + event.start.split('-')[2]
        }
        return event.start.split('-')[1] + '/' + event.start.split('-')[2] + ' - ' + event.end.split('-')[1] + '/' + event.end.split('-')[2]
    }

    // calculates the number of days an event lasts
    const calcNumDays = (event) => {
        const startDate = stringToDate(event.start)
        const endDate = stringToDate(event.end)
        const numDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1
        return numDays
    }

    // calculates position on the css-grid that event will be on
    const calcEventCol = (event) => {
        const startDate = stringToDate(event.start)
        const firstEvent = timelineItems.slice().sort((a, b) => stringToDate(a.start) - stringToDate(b.start))[0]
        const firstDate = stringToDate(firstEvent.start)

        // calculates the number of days since the very firstEvent that event takes place
        const eventIndex = Math.ceil((startDate - firstDate) / (1000 * 60 * 60 * 24)) + 1
        const endIndex = calcNumDays(event) + eventIndex
        const col = eventIndex + '/' + endIndex
        return col
    }

    function zoomIn() {
        const newNumDays = numDaysDisplayed - 1
        if (newNumDays > 0) {
            setNumDaysDisplayed(newNumDays)
        } else {
            setNumDaysDisplayed(1)
        }
    }

    function zoomOut() {
        const newNumDays = numDaysDisplayed + 1
        if (newNumDays < 10) {
            setNumDaysDisplayed(newNumDays)
        } else {
            setNumDaysDisplayed(9)
        }
    }

    return (
        <div>
            <div className="zoom-container">
                <button className="zoom-button" onClick={zoomIn.bind(this)}>Zoom In</button>
                <button className="zoom-button" onClick={zoomOut.bind(this)}>Zoom Out</button>
            </div>

            <div className="timeline">
                <div className="timeline-grid">
                    {timeline}
                </div>

                <div className="events-grid">
                    {eventGrid}
                </div>
            </div>
        </div>
        
    )
}

export default Timeline;