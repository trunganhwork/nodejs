

test('Two plus two is four', ()=>{
	expect(2+2).toBe(4);
});

test('Compare equal two objects', () => {
	const data = {one: 1};
	data['two']  = 2;
	expect(data).toEqual({one: 1, two: 2});
});

test('Compare null, undefined, true, false', () => {
	const data = true;
	expect(data).not.toBeNull();
	expect(data).not.toBeUndefined();
	expect(data).toBeDefined();
	expect(data).toBeTruthy();
	expect(data).not.toBeFalsy();
});

test('Add two positive numbers not equal 0', () => {
	for (let i = 1; i < 10; i++)
		for (let j = 1; j < 10; j++){
			expect(i+j).not.toBe(0);
		}
});

test('Compare two numbers', () => {
	const data = 2 + 2;
	expect(data).toBeGreaterThan(3);
	expect(data).toBeGreaterThanOrEqual(3);
	expect(data).toBeLessThan(5);
	expect(data).toBeLessThanOrEqual(5);

	expect(data).toBe(4);
	expect(data).toEqual(4);
	const bvalue = 0.1 + 0.2;
	expect(bvalue).not.toBe(0.3);
	expect(bvalue).toBeCloseTo(0.3);
})

test('String', () => {
	const str = 'string';
	expect(str).toMatch(/str/);
})

const shoppingList = ['milk'];
test('Array contain item', () => {
	expect(shoppingList).toContain('milk');
	expect(new Set(shoppingList)).toContain('milk');
});

function throwAndroidCode(){
	return 'Done';
}
test('Testing throw error', () => {	
	expect(throwAndroidCode).toEqual(throwAndroidCode);
	expect(throwAndroidCode()).toEqual('Done');
});

test('Throw Type Error' , () => {
	const f = () => {
		throw new TypeError;
	}
	expect(f).toThrow();
})