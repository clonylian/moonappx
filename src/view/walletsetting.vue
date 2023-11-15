<template>
    <div class="box">
        <div class="walltsting">
            <router-link to="/connectwellet">
                <svg style="margin: 1rem; " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                        d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z">
                    </path>
                </svg>
            </router-link>
            <div class="wallt_name">
                <p class="wallt_p">My Wallet 2
                    <svg style="width: 30px; height: 30px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path
                            d="M5 18.89H6.41421L15.7279 9.57629L14.3137 8.16207L5 17.4758V18.89ZM21 20.89H3V16.6474L16.435 3.21233C16.8256 2.8218 17.4587 2.8218 17.8492 3.21233L20.6777 6.04075C21.0682 6.43128 21.0682 7.06444 20.6777 7.45497L9.24264 18.89H21V20.89ZM15.7279 6.74786L17.1421 8.16207L18.5563 6.74786L17.1421 5.33365L15.7279 6.74786Z">
                        </path>
                    </svg>
                </p>
                <div class="wallt_ewmbox">
                    <div class="wallt_ewm">
                        <img src="../assets/10.png">
                    </div>
                </div>
                <p class="wallt_pone">0x6993e943db7efd51f9411d39b45d30ab0be38a76</p>
                <p style="text-align: center;">copy</p>
                <div class="wallt_bi">
                    <a href="https://etherscan.io/address/0x6993e943db7efd51f9411d39b45d30ab0be38a76" target="_blank"
                        class="wallt_eth">
                        <img src="../assets/11.png">
                        <p>Etherscan</p>
                    </a>
                    <a href="https://bscscan.com/address/0x6993e943db7efd51f9411d39b45d30ab0be38a76" target="_blank"
                        class="wallt_bth">
                        <img src="../assets/9.png">
                        <p>Bscscan</p>
                    </a>
                </div>
                <router-link to="/exportkey">
                    <div class="token_si">
                        {{ $store.state.txt.walletsetting }}
                    </div>
                </router-link>
                <router-link to="/exportkeys">
                    <div class="token_si">
                        {{ $store.state.txt.walletsetings }}
                    </div>
                </router-link>
            </div>
        </div>
        <Foot></Foot>
    </div>
</template>
<script setup>
import Foot from "../components/foot.vue";
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
    /* margin: 1rem; */
}

.wallt_ewmbox {
    width: 100%;
    display: flex;
    justify-content: center;
    /* margin: 0 auto; */
}

.wallt_p {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
}

.wallt_pone {
    color: white;
    font-size: 14px;
    width: 100%;
    text-align: center;
}

.wallt_ewm {
    width: 9rem;
    height: 9rem;
    border: 1px black solid;
    border-radius: 15px;
    padding: 0.5rem;
    margin-bottom: 2rem;
}

.wallt_ewm>img {
    width: 100%;
    height: 100%;
    /* padding: 1.5rem; */
}

.wallt_bi {
    width: 90%;
    margin: 0 auto;
    color: black;
}



.wallt_bi {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-between
}

.wallt_eth {
    border-radius: 15px;
    display: flex;
    width: 40%;
    padding: 0.8rem;
    border-radius: 15px;
    display: flex;
    background-color: rgb(147, 211, 109);
    justify-content: center;
    align-items: center;
    border: 2px black solid;
    color: black;
}

.wallt_eth>img {
    width: 30px;
    height: auto;
}

.wallt_bth {
    width: 40%;
    padding: 0.8rem;
    border-radius: 15px;
    display: flex;
    background-color: rgb(147, 211, 109);
    justify-content: center;
    align-items: center;
    border: 2px black solid;
    color: black;

}

.wallt_bth>img {
    width: 30px;
    height: auto;
}

.token_si {
    width: 80%;
    margin: 1rem auto;
    padding: 1rem;
    text-align: center;
    border-radius: 15px;
    border: 1px black solid;
    background-color: white;
    color: black;
}
</style>