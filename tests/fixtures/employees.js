let counter = 0;

export function createEmployee() {
    counter++;
    const id = Date.now() + counter;

    return {
        name: `John ${id}`,
        email: `john${id}@test.com`,
        role: 'Manager'
    };
}