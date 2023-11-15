<template>
    <div class="box">
        <div class="walltsting">
            <router-link to="/connectwellet">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                        d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z">
                    </path>
                </svg>
            </router-link>
            <div class="key">
                <p>{{ $store.state.txt.exportkeyhead }}</p>
            </div>
            <div class="key_one">
                <input v-model="password" :placeholder="$store.state.txt.exportkeyinput"
                    :type="showPassword ? 'text' : 'password'">
                <p @click="showPassword = !showPassword">{{ showPassword ? "show" : "hide" }}</p>
            </div>

            <p class="key_two">{{ $store.state.txt.exportwaring }}</p>
            <p class="key_three">
                {{ $store.state.txt.exportkeytxt }}</p>
            <div class="key_four">

                <router-link @click="handleConfirmation" :to="password.match(/^.{6,}$/) ? '/moonkey' : ''"
                    :class="password.match(/^.{6,}$/) ? 'key_five active' : 'key_five'">
                    {{ $store.state.txt.exportture }}
                </router-link>
                <router-link style="color: black;" to="/walletsetting">
                    <div class="key_six">
                        {{ $store.state.txt.exportfalse }}
                    </div>
                </router-link>
            </div>
        </div>
        <Foot></Foot>
    </div>
</template>
<script setup>
import Foot from "../components/foot.vue";
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const password = ref('');
const showPassword = ref(false);
const router = useRouter();

function handleConfirmation() {
    if (password.value.match(/^.{6,}$/)) {
        router.push('/moonkey');
    }
}

</script>
<style scoped>
.box {
    width: 100%;
    height: 100%;
    display: flex;
    background-color: rgba(0, 0, 0, 0.5);
}

.walltsting {
    width: 95%;
    height: 85%;
    background-color: rgb(128, 139, 231);
    margin: 1rem auto;
    border-radius: 15px;
}

.walltsting svg {
    width: 30px;
    height: 30px;
    margin: 1rem 0 0 1rem;
}

.key {
    width: 65%;
    margin: 0 auto;
    font-size: 22px;
    text-align: center;
    padding-bottom: 3rem;
}

.key_one {
    width: 85%;
    margin: 0 auto;
    padding: 0.5rem;
    border-radius: 15px;
    display: flex;
    background-color: white;
    padding-right: 1rem;
    justify-content: space-between;

}

.key_one>input {
    border: none;
    outline: none;
}

.key_one>p {
    color: rgb(147, 211, 109);
}

.key_two {
    color: red;
    text-align: center;
    margin: 1rem 0;
}

.key_three {
    text-align: center;

}

.key_four {
    width: 90%;
    text-align: center;
    margin: 6rem auto;
}

.custom-link {
    width: 100%;
}

.key_five {
    display: inline-block !important;
    width: 90%;
    display: inline;
    padding: 0.8rem;
    color: black;
    border: 2px black solid;
    border-radius: 15px;
    background-color: rgb(177, 177, 177);
    margin-bottom: 1rem;
}

.key_five.active {
    background-color: rgb(147, 211, 109);
}

.key_six {
    padding: 0.8rem;
    border: 2px black solid;
    border-radius: 15px;
    background-color: white;
}
</style>