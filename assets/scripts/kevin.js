const STORAGE_KEY_DANCERS = 'totalLifetimeDancers' // 'totalDancingMen'

function Kevin(props) {
    this.fun = 0
    this.dancersCurrently = 0
    this.dancersLifetime =
        JSON.parse(localStorage.getItem(STORAGE_KEY_DANCERS)) || 0

    // now we know if the visitor previously engaged with the dancing man button
    // this means we know they are a fun person :)_

    console.log(this.dancersLifetime)

    this.newDancer = () => {
        this.dancersCurrently++
        this.dancersLifetime++
        localStorage.setItem(
            STORAGE_KEY_DANCERS,
            JSON.stringify(this.dancersLifetime)
        )
    }

    return this;
}

const kevin = Kevin()


window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed')
})
