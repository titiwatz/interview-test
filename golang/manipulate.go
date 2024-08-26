package main

import (
	"sort"
)

func GeneratePermutations(str string) []string {
	runes := []rune(str)
	var result []string
	permutationsString(runes, 0, len(runes), &result, make(map[string]struct{}))

	sort.Strings(result)
	return result
}

func permutationsString(runes []rune, l, r int, result *[]string, seen map[string]struct{}) {
	if l == r {
		perm := string(runes)
		if _, exists := seen[perm]; !exists {
			*result = append(*result, perm)
			seen[perm] = struct{}{}
		}
		return
	}

	for i := l; i < r; i++ {
		runes[l], runes[i] = runes[i], runes[l]
		permutationsString(runes, l+1, r, result, seen)
		runes[l], runes[i] = runes[i], runes[l]
	}
}

// func main() {

// 	reader := bufio.NewReader(os.Stdin)
// 	fmt.Print("Enter a string: ")
// 	input, _ := reader.ReadString('\n')
// 	input = input[:len(input)-1]

// 	permutations := GeneratePermutations(input)
// 	fmt.Println("Permutations:", permutations)
// }
