import cx from "./cx";

test('should return is-show', () => {
    const styles = {
        'button': 'button',
        'is-show': 'is-show'
    }

    const classNames = [
        'button',
        {
            'is-show': true
        }
    ]

    expect(cx(classNames, styles)).toBe('button is-show');
})