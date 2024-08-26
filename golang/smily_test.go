package main

import "testing"

// Write your test here
func TestCountSmileys(t *testing.T) {
	tests := []struct {
		input    []string
		expected int
	}{
		{
			input:    []string{":)", ";(", ";}", ":-D"},
			expected: 2,
		},
		{
			input:    []string{";D", ":-(", ":-)", ";~)"},
			expected: 3,
		},
		{
			input:    []string{";]", ":[", ";*", ":$", ";-D"},
			expected: 1,
		},
		{
			input:    []string{"No smileys"},
			expected: 0,
		},
		{
			input:    []string{":) :) :)"},
			expected: 3,
		},
	}

	for _, test := range tests {
		result := CountSmilyFace(test.input)
		if result != test.expected {
			t.Errorf("For input %q, expected %d but got %d", test.input, test.expected, result)
		}
	}
}
