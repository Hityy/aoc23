def read_and_process_file(file_path):
    word_to_digit = {
        'one': '1', 'two': '2', 'three': '3', 'four': '4', 
        'five': '5', 'six': '6', 'seven': '7', 'eight': '8', 'nine': '9'
    }

    def transform_line(line):
        # Sort words by length in descending order to replace longer words first
        for word in sorted(word_to_digit, key=len, reverse=True):
            line = line.replace(word, word_to_digit[word])

        # Extract the first and last digit
        digits = ''.join(filter(str.isdigit, line))
        if len(digits) >= 2:
            return int(digits[0] + digits[-1])
        elif len(digits) == 1:
            return int(digits)
        else:
            return 0

    with open(file_path, 'r') as file:
        lines = file.readlines()
        return sum(transform_line(line.strip()) for line in lines)

# Example usage
file_path = './1p.txt'  # Replace with your actual file path
result = read_and_process_file(file_path)
print(f"Sum of all calibration values: {result}")
