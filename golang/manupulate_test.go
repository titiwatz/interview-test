package main

import (
	"reflect"
	"testing"
)

// Write your test here

func TestGeneratePermutations(t *testing.T) {
	tests := []struct {
		input    string
		expected []string
	}{
		{
			input:    "abc",
			expected: []string{"abc", "acb", "bac", "bca", "cab", "cba"},
		},
		{
			input:    "a",
			expected: []string{"a"},
		},
		{
			input:    "ab",
			expected: []string{"ab", "ba"},
		},
		{
			input:    "",
			expected: []string{""},
		},
		{
			input:    "aab",
			expected: []string{"aab", "aba", "baa"},
		},
		{
			input:    "aabb",
			expected: []string{"aabb", "abab", "abba", "baab", "baba", "bbaa"},
		},
	}

	for _, test := range tests {
		result := GeneratePermutations(test.input)
		if !reflect.DeepEqual(result, test.expected) {
			t.Errorf("For input %q, expected %v but got %v", test.input, test.expected, result)
		}
	}
}
