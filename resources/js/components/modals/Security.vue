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
        <div class="row" v-if="winner!=null">
            <h2>Победитель розыгрыша</h2>
            <div class="img">
                <img :src="`/img/avatars/${winner.avatar}`" alt="">
            </div>
            <h3>{{winner.name}}</h3>
            <h2>Победное место</h2>
            <strong>{{winner_place}}</strong>
        </div>
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
        props: ['random', "signature", "winner", "winner_place"],
        methods: {}
    }
</script>
<style lang="scss">

    .row {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        .img {
            width: 150px;
            height: 150px;
            padding: 15px;
            box-sizing: border-box;
            img {
                width: 100%;
                height: 100%;

            }
        }

        h2 {
            width: 100%;
            line-height: 150%;
            text-align: center;
            font-size: 24px;
            color: white;
        }
        h3 {
            width: 100%;
            line-height: 150%;
            text-align: center;
            font-size: 18px;
            color: white;
        }
        strong {
            text-align: center;
            font-weight: 900;
            font-size: 36px;
            color: yellow;
        }
    }
</style>
