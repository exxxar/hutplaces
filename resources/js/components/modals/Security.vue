<template>
    <div class="modal-body security-modal">
        <div class="logo">
            <img v-lazy="'/img/security-icon-1.png'" alt="">
        </div>

        <h1>ЗАЩИТА ВЫИГРЫША</h1>

        <p>
            Данная страница позволяет пользователям проверить выигрышный номер, который был получен после заполнения лотереи и проведения розыгрыша.
            Для обеспечения честности розыгрыша и безопасности мы делегируем генерацию выигрышного номера внешнему сервису <a
                href="random.org">Random.org</a>. После проведения розыгрыша каждый пользовтаель может убедиться в честности результата и отсутсвии подтасовок.
        </p>
        <form v-if="random.length>0&&signature.length>0" method="post" action="https://api.random.org/signatures/form">
            <input type="hidden" name="format" value="json">
            <div class="input-group">
                <label for="random">Random</label>
                <textarea name="random" id="random" :value="random"></textarea>
            </div>

            <div class="input-group">
                <label for="signature">Signature</label>
                <textarea name="signature" id="signature" :value="signature"></textarea>
            </div>

            <div class="input-group">
                <button type="submit" class="btn btn-yellow">Проверить</button>
            </div>

        </form>

    </div>
</template>
<script>
    export default {
        name: 'faq',
        props: ['random', "signature"],
        methods: {}
    }
</script>
<style lang="scss">

</style>
