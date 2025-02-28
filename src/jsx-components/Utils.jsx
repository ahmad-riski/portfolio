import { ref } from 'vue'

export function Content() {
	const name = ref('Vue!')

	return (
		<h1>Hello {name.value}</h1>
	)
}