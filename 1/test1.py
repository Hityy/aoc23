def read_and_process_file(file_path):
    def extract_calibration_value(line):
        # Extract all digits from the line
        digits = [d for d in line if d.isdigit()]

        # If there are no digits, return 0
        if not digits:
            return 0

        # Combine the first and last digit to form a two-digit number
        first_digit = digits[0]
        last_digit = digits[-1]
        return int(first_digit + last_digit)

    # Read the file and process each line
    with open(file_path, 'r') as file:
        lines = file.readlines()
        return sum(extract_calibration_value(line) for line in lines)

# Example usage
file_path = './1p.txt'  # Replace with your actual file path
result = read_and_process_file(file_path)
print(f"Sum of all calibration values: {result}")
