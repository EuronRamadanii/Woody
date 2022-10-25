<template>
    <section class="w3l-stats py-lg-5 py-5" id="stats">
        <div class="gallery-inner container py-md-5 py-3">
            <div class="row stats-con" data-aos="zoom-in" data-aos-duration="1500">
                <div class="col-lg-3 col-6 stats_info counter_grid">
                    <!-- <span class="fa fa-laptop"></span> -->
                    <div class="icon">
                        <img style="height: 100px; width: 100px;" src="../assets/icons/project-management.png" alt="">
                    </div>
                    <!-- <p class="counter">1200</p>
                     -->
                    <div class="iCountUp">
                        <ICountUp :startVal="stat1.startVal" :endVal="stat1.endVal" :decimals="stat1.decimals"
                            :duration="stat1.duration" :options="stat1.options" @ready="onReady" />
                        <h4 class="countup">Projects & Residentials Completed in 2020</h4>
                    </div>
                </div>
                <div class="col-lg-3 col-6 stats_info counter_grid1">
                    <!-- <span class="fa fa-users"></span> -->
                    <div class="icon">
                        <img style="height: 100px; width: 100px;" src="../assets/icons/team.png" alt="">
                    </div>
                    <!-- <p class="counter">2120</p> -->
                    <div class="iCountUp">
                        <ICountUp :startVal="stat2.startVal" :endVal="stat2.endVal" :decimals="stat2.decimals"
                            :duration="stat2.duration" :options="stat2.options" @ready="onReady" />
                        <h4 class="countup">Qualified Employees & Workers With Us</h4>
                    </div>
                </div>
                <div class="col-lg-3 col-6 stats_info counter_grid mt-lg-0 mt-5">
                    <!-- <span class="fa fa-trophy"></span> -->
                    <div class="icon">
                        <img style="height: 100px; width: 100px;" src="../assets/icons/target.png" alt="">
                    </div>
                    <!-- <p class="counter">1012</p> -->
                    <div class="iCountUp">
                        <ICountUp :startVal="stat3.startVal" :endVal="stat3.endVal" :decimals="stat3.decimals"
                            :duration="stat3.duration" :options="stat3.options" @ready="onReady" />
                        <h4 class="countup">Satisfied Clients We Served Globally</h4>
                    </div>
                </div>
                <div class="col-lg-3 col-6 stats_info counter_grid2 mt-lg-0 mt-5">
                    <!-- <span class="fa fa-smile-o"></span> -->
                    <div class="icon">
                        <img style="height: 100px; width: 100px;" src="../assets/icons/practice.png" alt="">
                    </div>
                    <!-- <p class="counter">60</p> -->
                    <div class="iCountUp">
                        <ICountUp :startVal="stat4.startVal" :endVal="stat4.endVal" :decimals="stat4.decimals"
                            :duration="stat4.duration" :options="stat4.options" @ready="onReady" />
                        <h4 class="countup">Years Of Experience In The Industry</h4>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import ICountUp from 'vue-countup-v2';
export default {
    name: 'demo',
    components: {
        ICountUp
    },
    data() {
        return {
            stat1: {
                startVal: 0,
                endVal: 1200,
                decimals: 0,
                duration: 2.5,
                options: {
                    useEasing: true,
                    useGrouping: true,
                    separator: ',',
                    decimal: '.',
                    prefix: '',
                    suffix: ''
                }
            },
            stat2: {
                startVal: 0,
                endVal: 2120,
                decimals: 0,
                duration: 2.5,
                options: {
                    useEasing: true,
                    useGrouping: true,
                    separator: ',',
                    decimal: '.',
                    prefix: '',
                    suffix: ''
                }
            },
            stat3: {
                startVal: 0,
                endVal: 1012,
                decimals: 0,
                duration: 2.5,
                options: {
                    useEasing: true,
                    useGrouping: true,
                    separator: ',',
                    decimal: '.',
                    prefix: '',
                    suffix: ''
                }
            },
            stat4: {
                startVal: 0,
                endVal: 60,
                decimals: 0,
                duration: 2.5,
                options: {
                    useEasing: true,
                    useGrouping: true,
                    separator: ',',
                    decimal: '.',
                    prefix: '',
                    suffix: ''
                }
            }
        };
    },
    methods: {
        onReady1: function (instance, CountUp) {
            const that = this;
            instance.update(that.endVal + 100);
        },
        onReady2: function (instance, CountUp) {
            const that = this;
            instance.update(that.endVal + 100);
        },
        onReady3: function (instance, CountUp) {
            const that = this;
            instance.update(that.endVal + 100);
        },
        onReady4: function (instance, CountUp) {
            const that = this;
            instance.update(that.endVal + 100);
        }
    }
};
</script>

<style scoped>
.iCountUp {
    font-size: 3em;
    margin: 0;
    color: #ffffff;
    text-align: center;
}

.countup {
    color: #ffffff;
}

.icon {
    margin: 0 0 20px 0;
    text-align: center;
}
</style>