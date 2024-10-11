<script lang="ts" setup>
    import {ref} from 'vue'; 
</script>


<template>
    <div :class="$style.page">
    <div :class="$style.signupWrapper">
        <div :class="$style.signupContent">
            <h2> Sign Up </h2>
            <form type="submit" :class="$style.form">
               
                    <p :class="$style.label">Email</p>

                    <div :class="$.inputWrapper">
                        <input type="email" :class="$style.input"/>
                    </div>
               
                    <p :class="$style.label">Password</p>

                    <div :class="$style.inputWrapper">
                        <input type="password" :class="$style.input"/>
                    </div>
                    <div :class="$style.buttonWrapper">
                        <button :class="$style.button">Click Here to Sign Up </button>
                    </div>
            </form>
        </div>
    </div>
</div>
</template>

<style module>
.page{
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgb(0,36,2);
    background: linear-gradient(204deg, rgba(0,36,2,1) 0%, rgba(9,121,10,1) 35%, rgba(0,255,246,1) 100%);
}
.signupWrapper{
    width: 400px;
    height: 400px;
    border: solid 1px #cacfd3;
    border-radius: 8px;
    z-index: 1;
    background: white;
   
}
.signupContent{
    display: flex;
    flex-direction: column; 

}
.input{
    margin: 0 0 1rem 0; 
    width: 200px; 
}
.form{
    display: flex;
    flex-direction: column;
}
.label{
    margin: 2rem 0 0 6rem;
    display: flex;
    align-items: flex-start;
    font-size: 14px;
    color: #2c3e50;
}

.inputWrapper{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.buttonWrapper{
    width: 100%;
    display: flex;
    justify-content: center;
}
.button{
    width: 200px; 
    background: #33C8FF;
    color: white;
    margin-top: 2rem;
}
</style>