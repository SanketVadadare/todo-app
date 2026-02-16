// Simple test file
const assert = require('assert');

// Test 1: Basic math (example)
function testAddition() {
    const result = 2 + 2;
    assert.strictEqual(result, 4, 'Addition test failed');
    console.log('✅ Addition test passed');
}

// Test 2: Server configuration
function testServerConfig() {
    const port = process.env.PORT || 5000;
    assert.strictEqual(typeof port, 'number', 'Port should be a number');
    console.log('✅ Server config test passed');
}

// Run tests
console.log('🧪 Running tests...');
testAddition();
testServerConfig();
console.log('🎉 All tests passed!');