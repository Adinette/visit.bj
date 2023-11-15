<template>
    <Auth title="Mot de passe oublié?" subtitle="Entrez votre adresse mail">
            <form class="py-3 mb-4" action="..." method="post">
                <p v-if="feedback">{{ feedback }}</p>
              <div class="d-flex justify-content-between mb-5">
                <div class="mb-3"><InputField type="text"   maxlength="1" v-model="email" placeholder="-" /></div>
                <div class="mb-3"><InputField type="text"   maxlength="1" v-model="email" placeholder="-" /></div>
                <div class="mb-3"><InputField type="text"   maxlength="1" v-model="email" placeholder="-" /></div>
                <div class="mb-3"><InputField type="text"   maxlength="1" v-model="email" placeholder="-" /></div>
                <div class="mb-3"><InputField type="text"   maxlength="1" v-model="email" placeholder="-" /></div>
                <div class="mb-3"><InputField type="text"   maxlength="1" v-model="email" placeholder="-" /></div>

              </div>
              <div><button type="submit" class="btn btn-primary w-100 p-3">Envoyer</button></div>
            </form> 
    </Auth>
    
  </template>
  
  <script setup></script>