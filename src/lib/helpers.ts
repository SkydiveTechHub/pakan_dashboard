
/**
 * Calculate the monthly interest based on the annual ROI of 30%
 * @param principal The amount in the investment wallet
 * @returns The monthly interest amount
 */
export const calculateMonthlyInterest = (principal: number): number => {
  // 30% annual ROI divided by 12 months = 2.5% monthly
  const monthlyInterestRate = 0.3 / 12;
  return Number((principal * monthlyInterestRate).toFixed(2));
};

/**
 * Format currency values for display
 * @param value The numeric value to format
 * @returns Formatted currency string
 */
export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
};

/**
 * Format date for display
 * @param date The date to format
 * @returns Formatted date string
 */
export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date);
};

/**
 * Calculate projected returns over time
 * @param principal Initial investment amount
 * @param monthlyContribution Additional monthly contribution
 * @param months Number of months for projection
 * @returns Array of monthly balance projections
 */
export const calculateProjection = (
  principal: number,
  monthlyContribution: number,
  months: number
): { month: number; balance: number }[] => {
  const monthlyRate = 0.3 / 12; // 30% annual divided by 12
  let currentBalance = principal;
  const projection = [];

  for (let i = 1; i <= months; i++) {
    // Add interest
    const interest = currentBalance * monthlyRate;
    // Add contribution
    currentBalance += interest + monthlyContribution;
    // Push to projection
    projection.push({
      month: i,
      balance: Number(currentBalance.toFixed(2))
    });
  }

  return projection;
};

/**
 * Get the appropriate CSS class for transaction type
 * @param type Transaction type
 * @returns CSS class name
 */
export const getTransactionTypeClass = (type: string): string => {
  switch (type) {
    case 'deposit':
      return 'bg-green-100 text-green-800 border-green-200';
    case 'investment':
      return 'bg-blue-100 text-blue-800 border-blue-200';
    case 'withdrawal':
      return 'bg-red-100 text-red-800 border-red-200';
    case 'interest':
      return 'bg-purple-100 text-purple-800 border-purple-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

/**
 * Get icon name for transaction type
 * @param type Transaction type
 * @returns Icon name
 */
export const getTransactionTypeIcon = (type: string): string => {
  switch (type) {
    case 'deposit':
      return 'arrow-down-right';
    case 'investment':
      return 'trending-up';
    case 'withdrawal':
      return 'arrow-up-right';
    case 'interest':
      return 'percent';
    default:
      return 'circle';
  }
};