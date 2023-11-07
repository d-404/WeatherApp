import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff', // white background color
    },
    titleText: {
        fontFamily: 'Roboto', // specify your font family if needed
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333', // dark text color for titles
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd', // light grey border
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
    },
    button: {
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#f01d71', // example button color
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center',
    },
    card: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 20,
    },
});

// You can also export colors or other common values
export const colors = {
    primary: '#ff8c00', // example primary color
    accent: '#ff6347', // example accent color
};
