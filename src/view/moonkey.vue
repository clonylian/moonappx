<template>
    <div class="box">
        <div class="walltsting">
            <router-link to="/exportkey">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                        d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z">
                    </path>
                </svg>
            </router-link>
            <p style="font-size: 22px; text-align: center;margin-bottom: 5rem;">  {{ $store.state.txt.moonkey }}</p>
            <div class="moonkey_moon">
                <img class="moonkey" src="../assets/Moon.png">
            </div>
            <p class="moonkeyone">
                2c9fead485fbfa58bad9c68d1228325ce2c4d2ebb1c345422cf3ff06bd35a207
            </p>
            <div @click="copyToClipboard" class="moonkeytwo">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                        d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6ZM7 11H13V13H7V11ZM7 15H13V17H7V15Z">
                    </path>
                </svg>
                {{ $store.state.txt.moonkeycopy }}
            </div>
            <div v-if="showCopySuccess" class="copy-success">{{ $store.state.txt.copyture }}</div>
        </div>
        <Foot></Foot>
    </div>
</template>
<script setup>
import Foot from "../components/foot.vue";
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const showCopySuccess = ref(false);

function copyToClipboard() {
    const textArea = document.createElement('textarea');
    textArea.value = '2c9fead485fbfa58bad9c68d1228325ce2c4d2ebb1c345422cf3ff06bd35a207';
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    showCopySuccess.value = true;
    setTimeout(() => {
        showCopySuccess.value = false;
     
    }, 3000);
    router.push('/walletsetting');
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
    background-color: white;
    margin: 1rem auto;
    border-radius: 15px;
}

.walltsting svg {
    width: 30px;
    height: 30px;
    margin: 1rem 0 0 1rem;
}

.moonkey_moon {
    width: 100%;
    display: flex;

    justify-content: center;
}

.moonkey {
    width: 250px;
    height: auto;
    /* margin: 0 auto; */
}

.moonkeyone {
    width: 80%;
    margin: 0 auto;
    font-size: 14px;
    color: rgb(128, 139, 231);
    text-align: center;
    word-wrap: break-word;
    padding-bottom: 3rem;
}

.moonkeytwo {
    width: 80%;
    padding: 0.8rem;
    margin: 0 auto;
    display: flex;
    background-color: rgb(147, 211, 109);
    border: 1px black solid;
    border-radius: 15px;
    justify-content: center;
    align-items: center;
    font-size: 14px;
}

.moonkeytwo>svg {
    width: 20px;
    height: 20px;
    margin: 0;
}
.copy-button {
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.copy-success {
    margin-top: 1rem;
    color: #28a745;
    font-size: 14px;
    text-align: center;
}
</style>