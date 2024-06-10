public with sharing class DynamicFormulaExample {
	@AuraEnabled(cacheable=true)
	public static String getFullName() {
		Contact cont = new Contact();
		cont.FirstName = 'John';
		cont.LastName = 'Doe';

		FormulaEval.FormulaInstance fullName = Formula.builder()
		                                       .withReturnType(FormulaEval.FormulaReturnType.STRING)
											   .withType(Contact.class)
		                                       .withFormula('LastName + ", " + FirstName')
		                                       .build();

		Object evaluationResult = fullName.evaluate(cont);
		return (String)evaluationResult;
	}
}