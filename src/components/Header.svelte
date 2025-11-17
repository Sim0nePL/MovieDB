<script lang="ts">
import Button from "./Button.svelte";
</script>
<header>
    <h1>Movie <span>DB</span></h1>
    <div class="header__right">
        <h3>Odkryj świat <span>filmów</span></h3>
        <div class="header__right-input">
            <input type="text" id="header__input">
        </div>
        <div class="header__right-buttons">
            <Button text="Discover"/>
            <Button text="Browse"/>
        </div>
    </div>
</header>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Expletus+Sans:ital,wght@0,400..700;1,400..700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Sansation:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Albert+Sans:ital,wght@0,100..900;1,100..900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Vend+Sans:ital,wght@0,300..700;1,300..700&display=swap');

    header{
        display: flex;
        justify-content: space-around;
        padding: 40px 160px;
        gap: 10vw;
        flex-wrap: wrap;
    }
    h1{
        font-size: 80px;
        font-family: "Expletus Sans";
    }
    h1 span{
        color: var(--primary-highlight);
    }
    h3{
        font-family: "Albert Sans";
        font-weight: 550;
        margin-bottom: 10px;
        font-size: 36px;
    }
    h3 span{
        color: var(--primary-highlight);
    }

    .header__right{
        display: flex;
        flex-direction: column;
        align-items: end;
        

    }

    .header__right-input{
        display: flex;


        padding: 0 0;
        opacity: 100%;
        background: var(--dark-low);
        border-radius: 10px;
        border: 1px solid var(--primary);
        margin-bottom: 10px;

    }
    .header__right-input input{
        flex: 1;
        background: none;
        border: none;
        outline: none;
        padding: 5px 30px;
        font-size: 20px;
        color: var(--white);
        font-family: "Vend Sans";

    }


</style>