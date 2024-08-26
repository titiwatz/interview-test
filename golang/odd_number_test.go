package main

import "testing"

// Write your test here
func TestFindOddNumber(t *testing.T) {
	tests := []struct {
		input    []int
		expected int
	}{
		{
			input:    []int{1, 2, 3, 2, 1, 3, 5},
			expected: 5,
		},
		{
			input:    []int{4, 5, 4},
			expected: 5,
		},
		{
			input:    []int{7},
			expected: 7,
		},
		{
			input:    []int{10, 10, 10, 15, 15, 15, 15},
			expected: 10,
		},
		{
			input:    []int{0, 0, 0, 0, 1},
			expected: 1,
		},
		{
			input:    []int{0, 0, 1, 1, 2, 2, 3},
			expected: 3,
		},
		{
			input:    []int{9, 9, 9, 8, 8, 8, 7},
			expected: 6,
		},
	}

	for _, test := range tests {
		result := FindOddNumber(test.input)
		if result != test.expected {
			t.Errorf("For input %v, expected %d but got %d", test.input, test.expected, result)
		}
	}
}
