<template>
    <div>
        <div class="inner-banner">
        </div>
        <section class="w3l-breadcrumb">
            <div class="container">
                <ul class="breadcrumbs-custom-path">
                    <li><a href="#url">Home</a></li>
                    <li class="active"><img style="height: 20px; margin-left: 5px;"
                            src="../assets/icons/right-arrow.png" alt=""> Contact Us</li>
                </ul>
            </div>
        </section>
        <!--/contact-->
        <section class="w3l-contact-11 py-5">
            <div class="title-content text-center">
                <h6 class="sub-titlehny">Contact</h6>
                <h3 class="hny-title">Get in touch with us</h3>
            </div>
            <div class="form-41-mian section-gap mt-5" data-aos="zoom-in" data-aos-duration="1500">
                <div class="container">
                    <div class="d-grid align-form-map">
                        <div class="form-inner-cont">
                            <form class="signin-form" ref="form" @submit.prevent="sendEmail">
                                <div class="form-input">
                                    <label for="w3lName">Name</label>
                                    <input type="text" name="user_name" v-model.trim="$v.userForm.name.$model" required
                                        id="w3lName" placeholder="" />
                                    <!-- <div v-if="!$v.userForm.name.required" class="invalid-feedback">The name field
                                        is
                                        required.</div> -->
                                </div>
                                <div class="form-input">
                                    <label for="w3lSender">Email</label>
                                    <input type="email" name="user_email" v-model.trim="$v.userForm.email.$model"
                                        required id="w3lSender" placeholder="" />
                                    <!-- <div v-if="!$v.userForm.email.required" class="invalid-feedback">The email field
                                        is
                                        required.</div> -->
                                </div>
                                <div class="form-input">
                                    <label for="w3lMessage">Message</label>
                                    <textarea placeholder="" name="message" v-model.trim="$v.userForm.message.$model"
                                        required id="w3lMessage"></textarea>
                                    <!-- <div v-if="!$v.userForm.message.required" class="invalid-feedback">The message field
                                        is
                                        required.</div> -->
                                </div>
                                <div class="form-submit text-right">
                                    <button type="submit" value="Send" class=" btn-style btn-primary">Submit
                                        Message</button>
                                </div>
                            </form>
                        </div>
                        <div class="map">
                            <iframe style="height: 400px; width: 350px"
                                src="https://maps.google.com/maps?q=Kosovo,%20Prishtine&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div class="contant11-top-bg mt-lg-5 mt-4">
                <div class="container">
                    <div class="d-grid contact pt-lg-4">
                        <div class="contact-info-left d-grid text-left" data-aos="zoom-in" data-aos-duration="1500">
                            <div class="contact-info mt-4">
                                <h4>London Office</h4>
                                <p class="mb-3"><label>Address: </label> London, LY-90814 Hill Station 2nd Street
                                </p>
                                <p class="mb-3"><label>Email : </label> <a href="mailto:industrie@email.com"
                                        class="email">industrie@email.com</a></p>
                                <p class="mb-3"><label>Phone : </label> <a href="tel:+1-2345-678-11">+1-2345-678-11</a>
                                </p>
                                <p class="mb-3"><label>Hours : </label> Mon-Fri: 8am ??? 7pm</p>
                            </div>
                            <div class="contact-info mt-4">
                                <h4>Newyork Office</h4>
                                <p class="mb-3"><label>Address: </label> Newyork, NY-90814 Hill Station 3rd Street
                                </p>
                                <p class="mb-3"><label>Email : </label> <a href="mailto:industrie@email.com"
                                        class="email">industrie@email.com</a></p>
                                <p class="mb-3"><label>Phone : </label> <a href="tel:+1-2345-678-11">+1-2345-678-11</a>
                                </p>
                                <p class="mb-3"><label>Hours : </label> Mon-Fri: 8am ??? 7pm</p>
                            </div>
                            <div class="contact-info mt-4">
                                <h4>Berlin Office</h4>
                                <p class="mb-3"><label>Address: </label> Berlin, BY-90814 Hill Station 4th Street
                                </p>
                                <p class="mb-3"><label>Email : </label> <a href="mailto:industrie@email.com"
                                        class="email">industrie@email.com</a></p>
                                <p class="mb-3"><label>Phone : </label> <a href="tel:+1-2345-678-11">+1-2345-678-11</a>
                                </p>
                                <p class="mb-3"><label>Hours : </label> Mon-Fri: 8am ??? 7pm</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import emailjs from '@emailjs/browser';
// import { useVuelidate } from '@vuelidate/core'
// import { required, email } from '@vuelidate/validators'
// import {
//     required,
//     email,
//     minLength,
//     sameAs
// } from "vuelidate/lib/validators";
import { required, email, minLength, maxLength } from 'vuelidate/lib/validators'

export default {
    // setup() {
    //     return { v$: useVuelidate() }
    // },
    data() {
        return {
            userForm: {
                name: "",
                email: "",
                message: "",
            },
            isSubmitted: false
        }
    },
    validations() {
        return {
            userForm: {
                name: { required }, // Matches this.firstName
                email: { required }, // Matches this.lastName
                message: { required } // Matches this.contact.email
            }

        }
    },
    methods: {
        sendEmail() {
            emailjs.sendForm('service_59hbpy8', 'template_rqiiv6t', this.$refs.form, 'sBUO9jJU_Ds1ggfda')
                .then((result) => {
                    console.log('SUCCESS!', result.text);
                }, (error) => {
                    console.log('FAILED...', error.text);
                });

            event.target.reset();
        },
        // validationStatus: function (validation) {
        //     return typeof validation != "undefined" ? validation.$error : false;
        // },

        // submit: function () {

        //     this.$v.$touch();
        //     if (this.$v.$pendding || this.$v.$error) return;

        //     // alert('Data Submit');
        // }

    }
}
</script>