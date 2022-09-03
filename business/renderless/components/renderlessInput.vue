
<script>
export default {
    props: ['value'],
    data() {
        return {
            newTag: ''
        };
    },
    methods: {
        removeTag: function (tag) {
            this.$emit('input', this.value.filter(t => t !== tag))
        },
        addTag: function () {
            if (this.newTag.trim().length === 0 || this.value.includes(this.newTag.trim())) {
                return
            }
            this.$emit('input', [...this.value, this.newTag.trim()]);
            this.newTag = '';
        }
    },
    render() {
        return this.$scopedSlots.default({
            tags: this.value,
            removeTag: this.removeTag,
            addTag: this.addTag,
            inputAttrs: {
                value: this.newTag
            },
            inputEvents: {
                input: (e) => {
                    this.newTag = e.target.value
                },
                keydown: (e) => {
                    if (e.keyCode === 13) {
                        e.preventDefault();
                        this.addTag();
                    }
                }
            }
        });
    },
};
</script>