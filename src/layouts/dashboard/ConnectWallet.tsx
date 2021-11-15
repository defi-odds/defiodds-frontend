import { Box, Button, Typography } from '@mui/material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { useEtherBalance, useEthers } from '@usedapp/core';
import { formatUnits } from '@ethersproject/units';

export default function ConnectWallet() {
  const { activateBrowserWallet, account, deactivate } = useEthers();
  const etherBalance = useEtherBalance(account);
  // const tokenBalance = useTokenBalance('0x001b3b4d0f3714ca98ba10f6042daebf0b1b7b6f', account);

  return account && etherBalance ? (
    <Box onClick={() => deactivate()}>
      <Typography variant="body1">{formatUnits(etherBalance, 18)} MATIC</Typography>
    </Box>
  ) : (
    <Button
      variant="contained"
      startIcon={<AccountBalanceWalletIcon />}
      onClick={() => activateBrowserWallet()}
    >
      Connect Wallet
    </Button>
  );
}
