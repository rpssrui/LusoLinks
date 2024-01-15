<template>
    <div id="app">
        <footer>
            <div class="footer-content">
                <div class="footer-local-information">
                    <h3>Local Information</h3>
                    <ul>
                        <li>Accommodation</li>
                        <li>Cost of living</li>
                        <li>Healthcare system</li>
                        <li>Language and communication</li>
                        <li>Local customs and culture</li>
                        <li>Transportation</li>
                    </ul>
                </div>
                <div class="footer-carrer-education">
                    <h3>Career and Education</h3>
                    <ul>
                        <li>Education</li>
                        <li>Job market</li>
                    </ul>
                </div>
                <div class="footer-leisure-lifestyle">
                    <h3>Leisure and Lifestyle</h3>
                    <ul>
                        <li>Local attractions and activities</li>
                        <li>Networking and expat communities</li>
                    </ul>
                </div>
                <div class="footer-legal-administrative">
                    <h3>Legal and Administrative</h3>
                    <ul>
                        <li>Legal and administrative resources</li>
                    </ul>
                </div>
                <div class="footer-weather-climate">
                    <h3>Weather and climate</h3>
                    <ul>
                        <li>Weather and climate</li>
                    </ul>
                </div>
                <div class="footer-safety-emergency">
                    <h3>Safety and Emergency</h3>
                    <ul>
                        <li>Safety and emergency services</li>
                    </ul>
                </div>
            </div>
            <div class="footer-copyright">
                <p>© LusoLinks {{ currentYear }}</p>
            </div>
        </footer>
    </div>
</template>
<script setup>
const currentYear = new Date().getFullYear()


</script>


<style scoped lang="scss">
#app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

footer {
    background-color: $light-gray;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 20rem;
    bottom: 0rem;
    position: fixed;
    width: 100%;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1600px;
}

.footer-local-information,
.footer-carrer-education,
.footer-leisure-lifestyle,
.footer-safety-emergency,
.footer-legal-administrative,
.footer-weather-climate {
    flex: 1;
    margin: 0 5rem 15px 0px;
}

h3 {
    margin-bottom: 10px;
    color: $wine-red;
}

ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
}

li {
    margin-bottom: 8px;
    color: $dark-green;

}

.footer-copyright {
    margin-top: 20px;
    width: 100%;
    max-width: 1200px;
    display: flex;
    justify-content: center;
    color: $dark-gray;
    /* Using dark gray as the copyright text color */
}
</style>
