const FlashWord = {
    data() {
        return {
            words:
            [
                {
                    word_a: 'Benim boyum?',
                    word_b: '178',
                    hint: 'ipucu filan yok',
                    answer: '',
                    correct: false,
                    checked: false,
                    answeredWrong: false
                },
                {
                    word_a: 'En sevdigim basketçi?',
                    word_b: 'Klay Thompson',
                    hint: '11',
                    answer: '',
                    correct: false,
                    checked: false,
                    answeredWrong: false
                },
                {
                    word_a: 'EN DEĞERLİM KİM?',
                    word_b: 'Dila',
                    hint: 'yazıklar olsun...',
                    answer: '',
                    correct: false,
                    checked: false,
                    answeredWrong: false
                },
                {
                    word_a: 'Bana demeni en sevdiğim isim?',
                    word_b: 'Can',
                    hint: 'umarım canberk yazmamışsındır',
                    answer: '',
                    correct: false,
                    checked: false,
                    answeredWrong: false
                },
                {
                    word_a: 'En sevdiğim renk?',
                    word_b: 'Kırmızı',
                    hint: 'k ile başlıyor',
                    answer: '',
                    correct: false,
                    checked: false,
                    answeredWrong: false
                },
                {
                    word_a: 'Doğduğum gün?',
                    word_b: '21',
                    hint: 'bişey demiyorum ben',
                    answer: '',
                    correct: false,
                    checked: false,
                    answeredWrong: false
                },
            ],
            correctCount: 0,
            completed: false
        }
    },
    methods: {
        checkAnswer(word) {
            word.checked = true;
            word.correct = word.word_b == word.answer;
            if (word.correct) {
                this.correctCount++;
            }
            else {
                word.answeredWrong = true;
                setTimeout(() => {word.answeredWrong = false;}, 500);
            }
        },
        reset() {
            this.words.forEach((item) => {
                item.checked = false;
                item.answer = '';
                item.correct = false;
            });
            this.correctCount = 0;
            this.completed = false;
        }
    },
    computed: {
        shuffledWords() {
            return this.words.sort(() => .5 - Math.random());
        },
        wordCount() {
            return this.words.length;
        }
    },
    watch: {
        correctCount() {
            this.completed = this.correctCount == this.wordCount;
        }
    }
}

const app = Vue.createApp(FlashWord).mount('#app');